import { TrialButton } from "./TrialButton";

export function MainPage() {
  return (
    <>
      <main>
        <div>
          <h1>Learn to code by watching others</h1>
          <p>
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable.{" "}
          </p>
        </div>
        <TrialButton>Try it free 7 days then $20/mo. thereafter</TrialButton>
      </main>
    </>
  );
}
