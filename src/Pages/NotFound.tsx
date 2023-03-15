import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <section className="page_404 bg-white py-10 font-serif">
        <div className="container mx-auto">
          <div className="row">
            <div className="col-sm-12">
              <div className="col-sm-10 col-sm-offset-1  text-center">
                <div className="content_box_404 my-[50px]">
                  <h1 className="text-center text-7xl sm:text-8xl font-bold mb-5">
                    404
                  </h1>
                  <h3 className="text-center text-3xl sm:text-5xl font-bold mb-10">
                    Look like you&apos;re lost
                  </h3>
                  <p className="text-center text-xl sm:text-2xl mb-5">
                    The page you are looking for is not available!
                  </p>
                  <div className="four_zero_four_bg bg-cover md:bg-contain md:bg-no-repeat bg-center h-96"></div>
                  <Link
                    to="/"
                    className="link_404 py-3 px-6 bg-art_gold text-white font-bold rounded-md hover:bg-art_black hover:text-art_white transition-all duration-300 ease-in-out"
                  >
                    Go Back to Gallery
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default NotFound;
