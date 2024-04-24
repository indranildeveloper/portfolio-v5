import { FC } from "react";
import TypewriterComponent from "typewriter-effect";

const Writing: FC = () => {
  return (
    <div className="my-4 font-mono text-primary lg:text-xl">
      <TypewriterComponent
        options={{
          strings: [
            "I build Single Page Applications.",
            "I build Mobile Applications.",
            "I build Full Stack Applications.",
            "I build Web3 Applications.",
          ],
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
};

export default Writing;
