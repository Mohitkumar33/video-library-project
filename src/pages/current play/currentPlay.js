const CurrentPLay = () => {
  return (
    <>
      <main className="main-content">
        <div className="playing-page">
          <div className="left-column">
            <h1 className="left-heading">Sen Sinatra leaks his team</h1>
            <p className="author-name">By sen sinatra</p>
            <div className="current-playing">
              <iframe
                className="current-playing"
                src="https://www.youtube.com/embed/k8PG_SRKxKM"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="all-video-actions">
              <div className="action-icons">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    // style="fill: rgba(0, 0, 0, 1)"
                  >
                    <path d="M20 8h-5.612l1.123-3.367c.202-.608.1-1.282-.275-1.802S14.253 2 13.612 2H12c-.297 0-.578.132-.769.36L6.531 8H4c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2h13.307a2.01 2.01 0 0 0 1.873-1.298l2.757-7.351A1 1 0 0 0 22 12v-2c0-1.103-.897-2-2-2zM4 10h2v9H4v-9zm16 1.819L17.307 19H8V9.362L12.468 4h1.146l-1.562 4.683A.998.998 0 0 0 13 10h7v1.819z"></path>
                  </svg>
                  <div>Like</div>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    // style="fill: rgba(0, 0, 0, 1)"
                  >
                    <path d="M20 3H6.693A2.01 2.01 0 0 0 4.82 4.298l-2.757 7.351A1 1 0 0 0 2 12v2c0 1.103.897 2 2 2h5.612L8.49 19.367a2.004 2.004 0 0 0 .274 1.802c.376.52.982.831 1.624.831H12c.297 0 .578-.132.769-.36l4.7-5.64H20c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zm-8.469 17h-1.145l1.562-4.684A1 1 0 0 0 11 14H4v-1.819L6.693 5H16v9.638L11.531 20zM18 14V5h2l.001 9H18z"></path>
                  </svg>
                  <div>Dislike</div>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    // style="fill: rgba(0, 0, 0, 1)"
                  >
                    <path d="M12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412l7.332 7.332c.17.299.498.492.875.492a.99.99 0 0 0 .792-.409l7.415-7.415c2.354-2.354 2.354-6.049-.002-8.416a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595zm6.791 1.61c1.563 1.571 1.564 4.025.002 5.588L12 18.586l-6.793-6.793c-1.562-1.563-1.561-4.017-.002-5.584.76-.756 1.754-1.172 2.799-1.172s2.035.416 2.789 1.17l.5.5a.999.999 0 0 0 1.414 0l.5-.5c1.512-1.509 4.074-1.505 5.584-.002z"></path>
                  </svg>
                  <div>Add to Watchlater</div>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    // style="fill: rgba(0, 0, 0, 1)"
                  >
                    <path d="M19 15v-3h-2v3h-3v2h3v3h2v-3h3v-2h-.937zM4 7h11v2H4zm0 4h11v2H4zm0 4h8v2H4z"></path>
                  </svg>
                  <div>Add to Playlist</div>
                </div>
              </div>
              <div className="views-info">
                <div>10k views</div>
                <div>13 hours ago</div>
              </div>
            </div>
            <h3 className="desc">Description</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea dicta,
              hic labore magni quibusdam quae libero fugit reiciendis odit quis
              quod facere ducimus, omnis eum, accusantium nemo aspernatur
              nostrum minima?
            </p>
          </div>
          <div className="right-column">
            <h1 className="right-heading">Must watch</h1>
            <div className="all-must-watch">
              <div className="video-card">
                <div className="card-image"></div>
                <p className="card-title">Video title</p>
                <div className="card-views">
                  <p>6k views</p>
                  <p className="views-pad">| 4 hours ago</p>
                </div>
                <button className="card-watch-button">Watch Now</button>
              </div>
              <div className="video-card">
                <div className="card-image"></div>
                <p className="card-title">Video title</p>
                <div className="card-views">
                  <p>6k views</p>
                  <p className="views-pad">| 4 hours ago</p>
                </div>
                <button className="card-watch-button">Watch Now</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export { CurrentPLay };
