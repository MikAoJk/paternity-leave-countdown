import {Countdown} from "@/components/Countdown";
import React from "react";
import BarnevognIkon from "@/components/BarnevognIkon";

export default function Home() {
  return (
      <main>
          <div className="flex flex-col items-center justify-between p-10">
            <BarnevognIkon/>
      </div>
    <div className="flex min-h-screen flex-col items-center justify-between md:p-12">
      <div className="z-5 items-center justify-between font-mono text-sm flex">
          <Countdown date={`2025-04-02T00:00:00`} />
      </div>
    </div>
    </main>
  )
}
