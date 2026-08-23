function MainContent({ children }) {
  return (
    <main className="w-full max-w-5xl flex-1 p-5 md:p-10">
      {children}
    </main>
  );
}

export default MainContent;