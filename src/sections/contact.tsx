import ContactList from "@/components/contact-list";
import MotionDiv from "@/components/motion-div";

export default function contact() {
  return (
    <section
      className="my-16 mb-28 flex flex-col items-center gap-8 text-center md:mt-8"
      id="contact"
    >
      <MotionDiv>
        <h2>Contact</h2>
      </MotionDiv>
      <MotionDiv>
        <p>
        Interested in working with me? Need help on your project? Or just wanna say hi? I'd love to hear you about that!
        </p>
      </MotionDiv>
      <ContactList />
    </section>
  );
}
