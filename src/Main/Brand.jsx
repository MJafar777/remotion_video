import {spring, useCurrentFrame, useVideoConfig, interpolate} from 'remotion';

export const Brand = () => {
  const {durationInFrames} = useVideoConfig();
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [0, 15], [0, 1]);

  const logoAnim = interpolate(
    frame,
    [0, 25, durationInFrames - 25, durationInFrames - 10],
    [0, 1, 1, 0]
  )

  return (
    <div className='main'
      style={{
        transform: 'scale(1.7)',
        position: 'absolute',
        top: '200px',
        left: '770px',
      }}
    >
      <div
        style={{
          transform: `translateY(-${logoAnim * 30}px)`,
          opacity: opacity,
          textAlign: 'center',
          width: '500px',
          height: '500px'
        }}
      >
        <svg
          style={{
            transform: `scale(${spring({
              fps: durationInFrames.fps,
              frame: frame,
              config: {
                damping: 100,
                stiffness: 200,
                mass: 0.5,
              }
            })})`,
            marginTop: '150px'
          }}
        >
          <g transform="translate(0.000000,151.000000) scale(0.100000,-0.100000)"
            fill="#000000" stroke="none"
            style={{
              fill: 'yellow',
              fillOpacity: 1,
              fillRule: 'nonzero',
              stroke: 'none'
            }}
            >
            <path d="M462 1315 c-98 -31 -114 -67 -122 -270 -7 -173 -14 -197 -62 -214
            -26 -9 -28 -14 -28 -65 0 -48 3 -56 18 -56 10 0 29 -11 42 -25 22 -24 24 -35
            30 -188 7 -182 17 -216 74 -255 40 -27 147 -46 158 -28 4 6 8 30 8 53 0 39 -3
            44 -35 58 -53 21 -65 60 -65 205 0 131 -9 169 -53 212 l-26 26 21 18 c44 41
            52 73 58 226 5 137 7 148 29 172 13 14 33 26 45 28 18 3 21 10 21 58 l0 55
            -35 2 c-19 1 -54 -4 -78 -12z"/>
            <path d="M1480 1270 c0 -51 3 -60 18 -60 10 0 29 -11 42 -25 22 -24 24 -36 30
            -180 7 -159 7 -160 58 -217 l24 -26 -22 -12 c-43 -23 -60 -83 -60 -218 0 -144
            -13 -187 -60 -205 -30 -11 -31 -13 -28 -67 l3 -55 40 3 c76 7 145 49 168 102
            5 14 13 99 16 189 7 163 7 163 34 187 16 13 35 24 43 24 10 0 14 14 14 56 0
            51 -2 56 -28 65 -48 17 -56 41 -62 209 -7 169 -19 214 -69 249 -30 21 -93 41
            -133 41 -27 0 -28 -1 -28 -60z"/>
            <path d="M723 598 c-56 -27 -66 -126 -18 -174 74 -74 177 30 130 131 -24 50
            -65 66 -112 43z"/>
            <path d="M994 600 c-65 -26 -74 -142 -15 -187 27 -21 79 -15 106 12 34 33 35
            112 3 149 -26 29 -63 39 -94 26z"/>
            <path d="M1248 590 c-35 -27 -50 -78 -37 -125 19 -66 94 -88 140 -39 32 34 35
            123 4 153 -31 32 -75 36 -107 11z"/>
          </g>
        </svg>
      </div>
    </div>
  );
};