import { UserForm } from "./form/UserForm";
import { TrialButton } from "./TrialButton";

export function MainPage() {
  return (
    <>
      <main className="w-full max-w-sm mx-auto m-28 md:max-w-6xl md:flex">
        <div className="text-white text-center mb-12 md:max-w-1/2 md:self-center">
          <h1 className="text-3xl font-semibold mb-8 md:text-left md:text-5xl">
            Learn to code by watching others
          </h1>
          <p className="font-normal text-lg md:text-left">
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable.
          </p>
        </div>
        <div className="md:max-w-1/2">
          <TrialButton
            boldText={"Try it free 7 days "}
            thinText={"then $20/mo. thereafter"}
            butColor={"blue"}
          />
          <UserForm />
        </div>
      </main>
    </>
  );
}
