import React from "react";

function Blog() {
  return (
    <>
      <section>
        <div
          style={{
            backgroundImage: 'url("../../Img/blo.jpg.webp")',
          }}
          class="    w-full  bg-cover bg-center object-cover  "
        >
          <div class={"w-full  text-center py-20 md:py-28 lg:py-36 xl:py-48 "}>
            <div class="w-full ">
              <p class="text-yellow-200 text-2xl md:text-3xl lg:text-5xl xl:text-7xl mb-4 font-semibold">
                Blog
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Blog;
