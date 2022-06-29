export const Page = ({children}) => {
  return (
    <article className="flex min-h-screen bg-gray-100 justify-center items-center">
      <div className="text-pink-500">{children || `Splash Page`}</div>
    </article>
  );
}