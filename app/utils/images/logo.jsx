export default function NetflixLogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 150"
      className="w-full z-999"
    >
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
          text {
            font-family: 'Bebas Neue', sans-serif;
            font-size: 100px;
            font-weight: 900;
            fill: #E50914;
          }
        `}
      </style>

      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
      >
        NETFLIX
      </text>
    </svg>
  );
}
