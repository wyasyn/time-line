import { DataItem, data } from "@/constants/data";
import { images } from "@/constants/images";
import React, { useState } from "react";

const Dashboard: React.FC = () => {
  const [timeFrame, setTimeFrame] = useState<"daily" | "weekly" | "monthly">(
    "weekly"
  );

  return (
    <div className=" h-full flex-1 text-white px-8 py-12 md:grid md:place-items-center">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6">
        <div className="bg-card rounded-xl flex flex-col items-start gap-6">
          <div className="flex min-w-[200px] items-center md:items-start md:flex-col gap-5 bg-profile w-full rounded-xl py-7 px-6 md:pb-12 ">
            <img
              src={images.profilePic}
              alt="Jeremy Robson"
              className="w-16 h-16 rounded-full outline outline-3 outline-white"
            />
            <div>
              <p className="text-sm text-foreground">Report for</p>
              <h1 className="text-2xl font-thin">Jeremy Robson</h1>
            </div>
          </div>
          <div className="text-sm py-4 px-6 flex gap-4 md:flex-col">
            <p
              className={`mb-2 cursor-pointer hover:text-white transition-all duration-200 ${
                timeFrame === "daily" ? "text-foreground" : "text-profile"
              }`}
              onClick={() => setTimeFrame("daily")}
            >
              Daily
            </p>
            <p
              className={`mb-2 cursor-pointer hover:text-white transition-all duration-200 ${
                timeFrame === "weekly" ? "text-foreground" : "text-profile"
              }`}
              onClick={() => setTimeFrame("weekly")}
            >
              Weekly
            </p>
            <p
              className={`cursor-pointer hover:text-white transition-all duration-200 ${
                timeFrame === "monthly" ? "text-foreground" : "text-profile"
              }`}
              onClick={() => setTimeFrame("monthly")}
            >
              Monthly
            </p>
          </div>
        </div>
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full ">
          {data.map((item: DataItem) => (
            <div
              key={item.title}
              className="relative rounded-2xl group md:min-w-[250px]"
              style={{ backgroundColor: item.bg }}
            >
              <img
                src={item.icon}
                alt={`${item.title} icon`}
                className="absolute top-0 right-4 h-10"
              />
              <div className="relative bg-card group-hover:bg-hover transition-all duration-200 rounded-xl mt-10 p-6 ">
                <div className=" mb-3 flex items-center justify-between ">
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <img
                    src={images.ellipsisIcon}
                    alt="ellipse"
                    className=" cursor-pointer "
                  />
                </div>
                <div className=" flex items-center justify-between sm:flex-col sm:items-start sm:justify-normal gap-4 ">
                  <p className="text-4xl font-light ">
                    {item.timeframes[timeFrame].current}hrs
                  </p>
                  <p className="text-sm text-foreground">
                    {timeFrame === "daily"
                      ? "Yesterday"
                      : timeFrame === "weekly"
                      ? "Last Week"
                      : "Last Month"}{" "}
                    - {item.timeframes[timeFrame].previous}hrs
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
