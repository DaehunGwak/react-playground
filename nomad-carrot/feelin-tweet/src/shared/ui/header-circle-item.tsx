export default function HeaderCircleItem({children}: {children: React.ReactNode}) {
  return (
    <div className="rounded-2xl shadow-gray-400 shadow-md hover:bg-gray-200 flex justify-center items-center">
      {children}
    </div>
  );
}
