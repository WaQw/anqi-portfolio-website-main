import MotionDiv from "@/components/motion-div";

export default function about() {
  return (
    <section
      id="about"
      className="mx-auto my-16 flex flex-col items-center justify-center gap-4 px-2 md:my-20  md:max-w-full lg:flex-row lg:items-start lg:gap-16"
    >
      <div className="order-2 lg:order-1 lg:w-2/3">
        <MotionDiv delayOffset={0.3}>
          <h2 className="mb-3 w-full text-center md:mb-6">About Me</h2>
        </MotionDiv>
        <article className="flex flex-col gap-4">
          <MotionDiv delayOffset={0.4}>
            <p>
              Greetings! I'm Anqi Wang, you can also call me Angie. I'm a Full-Stack developer based in Toronto, Ontario, Canada.
            </p>
          </MotionDiv>
          <MotionDiv delayOffset={0.5}>
            <p>
              I am a recent graduate of the Master's program in Computer Engineering at the University of Waterloo. Some of my interests include: web development, UI/UX design, iOS & Android development, quality assurance and many others. 
            </p>
          </MotionDiv>
          <MotionDiv delayOffset={0.6}>
            <p>
              As a technologies enthusiast, I am highly passionate about
              building full-stack web and mobile applications. And I love learning new
              technologies, especially elegant code architectures and design
              patterns. I hope to leverage my technical skills to build valuable
              apps that can make a difference in people's lives.
            </p>
          </MotionDiv>
        </article>
      </div>
      {/* <div className="lg:order-2 lg:w-1/3">
        <MotionDiv delayOffset={0.4}>
          <img
            src="/photo.jpeg"
            alt="photo"
            className="w-[350px] min-w-[300px] rounded-xl transition-all hover:rotate-3 hover:scale-105"
          />
        </MotionDiv>
      </div> */}
    </section>
  );
}
