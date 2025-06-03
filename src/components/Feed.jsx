const Feed = () => {
    return (
      <section
        id="feed"
        className="w-full bg-white py-20 px-6 md:px-16 flex flex-col items-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-pink-600 mb-10 text-center">
          My Instagram Feed ✨
        </h2>
  
        {/* Instagram Feed Embed */}
        <div className="w-full max-w-6xl">
          <iframe
            src="//lightwidget.com/widgets/036eee813c325fe8951f2ed36a09ebbb.html"
            scrolling="no"
            allowTransparency="true"
            className="lightwidget-widget w-full"
            style={{
              border: "0",
              overflow: "hidden",
              width: "100%",
              height: "500px",
            }}
            title="Instagram Feed"
          ></iframe>
        </div>
      </section>
    );
  };
  
  export default Feed;
  