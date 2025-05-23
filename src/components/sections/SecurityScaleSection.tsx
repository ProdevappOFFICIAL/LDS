import { gilroyBold } from "@/lib/utils";
import { cn } from "@/lib/utils";
import React from "react";
import MainButton from "../common/MainButton";

function SecurityScaleSection() {
  return (
    <section className="flex flex-col md:flex-row p-10  justify-between gap-16 items-center">
      <div>
        <p
          className={cn(
            gilroyBold.className,
            "text-[40px] leading-tight md:leading-normal text-primary"
          )}
        >
          Secured Offline Exam <span className="text-gray-500">security</span>
        </p>
        <p className="text-[20px] text-primary mt-1.5 mb-6">
          LearningDeck is trusted by schools

        </p>

        <div className="flex gap-[12px] justify-start">
          <MainButton
            text="Try Free Pilot Now"
            size="small"
            className="border-none rounded-[12px]"
          />
          <MainButton
            text="Talk to sales"
            size="small"
            className="rounded-[12px] border-[1px] border-[#EDEEF0] bg-white hover:bg-white text-[#31373D]"
          />
        </div>
      </div>
      <div>
        <img src="/images/security_scale.png" alt="security" />
      </div>
    </section>
  );
}

export default SecurityScaleSection;
