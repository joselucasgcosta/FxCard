
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { CANVAS_WIDTH, CANVAS_HEIGHT, DEFAULT_PRESETS, FONT_FAMILIES } from './constants';
import { TextConfig } from './types';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';

const App: React.FC = () => {
  const [backgroundImage, setBackgroundImage] = useState<string>(DEFAULT_PRESETS[0].url);
  const [config, setConfig] = useState<TextConfig>({
    name: '',
    fontSize: 65,
    fontColor: '#000000',
    positionX: CANVAS_WIDTH / 2,
    positionY: CANVAS_HEIGHT * 0.84, // Posição padrão mais para o rodapé em formato vertical
    fontFamily: 'Montserrat',
    uppercase: true
  });

  const canvasRef = useRef<HTMLCanvasElement>(null);

  const drawCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = backgroundImage;

    img.onload = () => {
      // Clear canvas
      ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

      // Draw background
      ctx.drawImage(img, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

      // Setup text
      const name = config.name.trim();
      if (name) {
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = config.fontColor;
        const fontStyle = config.uppercase ? 'bold' : 'normal';
        ctx.font = `${fontStyle} ${config.fontSize}px ${config.fontFamily}`;

        const displayText = config.uppercase ? name.toUpperCase() : name;

        // Add a subtle drop shadow for readability
        ctx.shadowColor = 'rgba(0, 0, 0, 0.3)';
        ctx.shadowBlur = 5;
        ctx.shadowOffsetX = 1;
        ctx.shadowOffsetY = 1;

        ctx.fillText(displayText, config.positionX, config.positionY);

        // Reset shadow
        ctx.shadowColor = 'transparent';
        ctx.shadowBlur = 0;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
      }
    };
  }, [backgroundImage, config]);

  useEffect(() => {
    drawCanvas();
  }, [drawCanvas]);

  const handleDownload = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement('a');
    link.download = `custom-story-${Date.now()}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  return (
    <div className="flex flex-col h-screen bg-slate-50 overflow-hidden">
      <Header />

      <main className="flex flex-1 overflow-hidden">
        {/* Left Sidebar for Controls */}
        <Sidebar
          config={config}
          setConfig={setConfig}
          presets={DEFAULT_PRESETS}
          onSelectPreset={setBackgroundImage}
          onDownload={handleDownload}
        />

        {/* Central Editor Area */}
        <div className="flex-1 flex flex-col items-center justify-center p-8 bg-slate-200 overflow-auto">
          <div className="relative h-full flex flex-col items-center justify-center">
            <div className="bg-white p-2 rounded-xl shadow-2xl flex items-center justify-center">
              <canvas
                ref={canvasRef}
                width={CANVAS_WIDTH}
                height={CANVAS_HEIGHT}
                className="rounded shadow-inner object-contain"
                style={{
                  maxHeight: 'calc(100vh - 180px)',
                  maxWidth: '100%',
                  aspectRatio: '9/16'
                }}
              />
            </div>

            <div className="mt-4 flex justify-between w-full max-w-[400px] items-center text-slate-500 text-xs px-2">
              <p><i className="fas fa-mobile-alt mr-2"></i>Formato Story: {CANVAS_WIDTH}x{CANVAS_HEIGHT}</p>
              <p>Qualidade HD</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
