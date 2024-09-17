import "../globals.css";
import "../output.css";
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children, aqi, temperature, weather, wind }) {
  return (
    <div className="wrapper">
      <img src="/background.png" className="bg-img" />
      <div className="overlay"></div>
      <main className="!z-50 w-full">
        <div className="container">
          <div
            className="grid grid-cols-12 gap-y-8 py-16 lg:gap-8 2xl:gap-20 2xl:py-20"
          >
            {children}
            {aqi}
            {temperature}
            {weather}
            {wind}
          </div>
        </div>
      </main>
    </div>
  );
}
