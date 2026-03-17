import Image from 'next/image';

const venueData: Record<string, { name: string; image: string }> = {
  '001': { name: 'The Bloom Pavilion', image: '/img/bloom.jpg' },
  '002': { name: 'Spark Space', image: '/img/sparkspace.jpg' },
  '003': { name: 'The Grand Table', image: '/img/grandtable.jpg' },
};

export default async function VenueDetailPage({ params }: { params: Promise<{ vid: string }> }) {
  const { vid } = await params;
  const venue = venueData[vid];

  if (!venue) {
    return <div style={{ padding: '24px' }}>Venue not found</div>;
  }

  return (
    <main style={{ padding: '24px' }}>
      <div style={{ maxWidth: '400px' }}>
        <div style={{ position: 'relative', width: '100%', height: '300px', borderRadius: '12px', overflow: 'hidden' }}>
          <Image src={venue.image} alt={venue.name} fill style={{ objectFit: 'cover' }} />
        </div>
        <h2 style={{ marginTop: '16px' }}>{venue.name}</h2>
      </div>
    </main>
  );
}