import Image from 'next/image';

const INSTAGRAM_USERNAME = 'psunsbe';
const INSTAGRAM_API_URL = `https://www.instagram.com/api/v1/users/web_profile_info/?username=${INSTAGRAM_USERNAME}`;

function getCaptionText(node) {
  return node.edge_media_to_caption?.edges?.[0]?.node?.text ?? '';
}

function trimCaption(text, maxLength = 120) {
  if (!text) return '';
  return text.length <= maxLength ? text : `${text.slice(0, maxLength).trim()}...`;
}

export default async function InstagramFeed({ maxPosts = 6 }) {
  let posts = [];
  let profileUrl = `https://www.instagram.com/${INSTAGRAM_USERNAME}/`;
  let errorMessage = null;

  try {
    const response = await fetch(INSTAGRAM_API_URL, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36',
        Accept: 'application/json, text/javascript, */*; q=0.01',
        'X-IG-App-ID': '936619743392459',
        Referer: 'https://www.instagram.com/',
        'Sec-Fetch-Site': 'same-site',
        'Sec-Fetch-Mode': 'navigate',
        'Sec-Fetch-User': '?1',
        'Sec-Fetch-Dest': 'document',
        'Accept-Language': 'en-US,en;q=0.9',
      },
      next: { revalidate: 600 },
    });

    if (!response.ok) {
      throw new Error(`Instagram request failed with status ${response.status}`);
    }

    const payload = await response.json();
    posts = payload?.data?.user?.edge_owner_to_timeline_media?.edges ?? [];
  } catch (error) {
    console.error('Instagram feed fetch error:', error);
    errorMessage = 'Unable to load the Instagram feed right now. Visit our Instagram profile for the latest updates.';
  }

  return (
    <section className="bg-white rounded-3xl shadow-lg overflow-hidden">
      <div className="px-6 py-8 sm:px-8 bg-[#fafafa] border-b border-gray-200">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-yellow-600 font-semibold">Instagram Feed</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900">Follow psunsbe</h2>
            <p className="mt-2 max-w-2xl text-sm md:text-base text-slate-600">
              See the latest NSBE Penn State moments and events from our Instagram page.
            </p>
          </div>
          <a
            href={profileUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-slate-900 bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Open Instagram
          </a>
        </div>
      </div>

      <div className="px-6 py-8 sm:px-8">
        {errorMessage ? (
          <div className="rounded-3xl border border-orange-200 bg-orange-50 p-6 text-orange-900">
            <p className="font-semibold">{errorMessage}</p>
            <p className="mt-2 text-sm text-orange-700">If you still need the latest updates, visit our Instagram profile.</p>
          </div>
        ) : posts.length === 0 ? (
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 text-slate-700">
            <p className="font-semibold">No posts are available right now.</p>
            <p className="mt-2 text-sm">Check back later or visit our Instagram profile.</p>
          </div>
        ) : (
          <div className="mx-auto max-w-4xl grid gap-5 sm:grid-cols-2 md:grid-cols-3">
            {posts.slice(0, maxPosts).map(({ node }) => {
              const caption = getCaptionText(node);
              const postUrl = `https://www.instagram.com/p/${node.shortcode}/`;

              return (
                <a
                  key={node.id}
                  href={postUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group block overflow-hidden rounded-3xl border border-gray-200 bg-slate-950 text-white transition hover:-translate-y-1 hover:shadow-2xl"
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={node.display_url}
                      alt={caption || 'NSBE Instagram post'}
                      width={1080}
                      height={1080}
                      className="h-56 w-full object-cover transition duration-300 group-hover:scale-105"
                      loading="lazy"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                  </div>
                </a>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
