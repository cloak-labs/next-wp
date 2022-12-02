import Button from '../components/Button';

export function AdminBar({ previewParams }) {
  let href = '/api/exit-preview';
  if (previewParams) href = `/api/exit-preview?slug=${previewParams.postSlug}`;
  return (
    <div className="w-full flex items-center justify-center bg-gray-900 text-gray-200 px-8 py-1.5">
      <div className='flex'>
        <p className="font-medium mb-0 text-base leading-7 flew-grow mr-4">
          You are previewing unpublished changes.
        </p>
        <Button color='gray' linkProps={{prefetch: false}} className="py-1" href={href} size="small">
          Exit Preview
        </Button>
      </div>
    </div>
  );
}