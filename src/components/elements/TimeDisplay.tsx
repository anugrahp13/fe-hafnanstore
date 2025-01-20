import { useEffect, useState } from "react";

export const TimeDisplay: React.FC = () => {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      let timeString = now.toLocaleTimeString("id-ID", {
        hour: "2-digit",
        minute: "2-digit",
      });

      // Replace dots with colons
      timeString = timeString.replace(/\./g, ":");

      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      setTime(
        `${timeString} ${timezone === "Asia/Jakarta" ? "WIB" : timezone}`
      );
    };

    const intervalId = setInterval(updateTime, 1000);
    updateTime(); // Jalankan sekali saat pertama kali render

    return () => clearInterval(intervalId); // Hapus interval saat komponen unmount
  }, []);

  return (
    <div className="text-slate-900 dark:text-white text-sm font-bold hidden md:flex">
      {time}
    </div>
  );
};
