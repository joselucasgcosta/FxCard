
import React from 'react';
import { TextConfig, Preset } from '../types';
import { FONT_FAMILIES } from '../constants';

interface SidebarProps {
  config: TextConfig;
  setConfig: React.Dispatch<React.SetStateAction<TextConfig>>;
  presets: Preset[];
  onSelectPreset: (url: string) => void;
  onDownload: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  config,
  setConfig,
  presets,
  onSelectPreset,
  onDownload
}) => {
  const updateConfig = (key: keyof TextConfig, value: any) => {
    setConfig(prev => ({ ...prev, [key]: value }));
  };

  const colorPresets = ['#204399', '#000000', '#ad8b51'];

  return (
    <aside className="w-96 bg-white border-r border-slate-200 overflow-y-auto p-6 flex flex-col gap-8 shadow-sm">
      {/* Name Section */}
      <section>
        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Informações</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Nome no Card</label>
            <input
              type="text"
              value={config.name}
              onChange={(e) => updateConfig('name', e.target.value)}
              placeholder="Digite o nome..."
              maxLength={30}
              style={{ color: '#204399' }}
              className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brandBlue focus:border-transparent outline-none transition-all font-semibold"
            />
            <p className="text-[10px] text-slate-400 mt-1 flex justify-between">
              <span>Máximo 30 caracteres</span>
              <span>{config.name.length}/30</span>
            </p>
          </div>
        </div>
      </section>

      {/* Style Section */}
      <section>
        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Estilo do Texto</h3>
        <div className="mb-4">
          <label className="block text-sm font-semibold text-slate-700 mb-2">Cor do Texto</label>
          <div className="flex flex-wrap gap-2 mb-3">
            {colorPresets.map(color => (
              <button
                key={color}
                onClick={() => updateConfig('fontColor', color)}
                style={{ backgroundColor: color }}
                className={`w-8 h-8 rounded-full border-2 transition-transform hover:scale-110 ${config.fontColor === color ? 'border-brandOrange ring-2 ring-brandOrange/20' : 'border-slate-200'}`}
                title={color}
              />
            ))}
            <div className="w-8 h-8 rounded-full border-2 border-slate-200 overflow-hidden relative group">
              <input
                type="color"
                value={config.fontColor}
                onChange={(e) => updateConfig('fontColor', e.target.value)}
                className="absolute inset-0 w-[150%] h-[150%] -translate-x-1/4 -translate-y-1/4 cursor-pointer"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Tamanho</label>
            <input
              type="number"
              value={config.fontSize}
              onChange={(e) => updateConfig('fontSize', parseInt(e.target.value) || 0)}
              style={{ color: '#204399' }}
              className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg outline-none font-semibold"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Fonte</label>
            <select
              value={config.fontFamily}
              onChange={(e) => updateConfig('fontFamily', e.target.value)}
              style={{ color: '#204399' }}
              className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg outline-none font-semibold"
            >
              {FONT_FAMILIES.map(font => (
                <option key={font} value={font}>{font}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex items-center gap-3 mt-4">
          <input
            type="checkbox"
            id="uppercase"
            checked={config.uppercase}
            onChange={(e) => updateConfig('uppercase', e.target.checked)}
            className="w-4 h-4 rounded text-brandBlue"
          />
          <label htmlFor="uppercase" className="text-sm font-medium text-slate-700">Tudo em maiúsculo</label>
        </div>
      </section>

      {/* Position Section */}
      <section>
        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Posicionamento</h3>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-1">
              <label className="text-sm font-semibold text-slate-700">Vertical (Y)</label>
              <span className="text-xs font-mono text-slate-400">{config.positionY}px</span>
            </div>
            <input
              type="range"
              min="0"
              max="1920"
              value={config.positionY}
              onChange={(e) => updateConfig('positionY', parseInt(e.target.value))}
              className="w-full accent-brandBlue"
            />
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <label className="text-sm font-semibold text-slate-700">Horizontal (X)</label>
              <span className="text-xs font-mono text-slate-400">{config.positionX}px</span>
            </div>
            <input
              type="range"
              min="0"
              max="1080"
              value={config.positionX}
              onChange={(e) => updateConfig('positionX', parseInt(e.target.value))}
              className="w-full accent-brandBlue"
            />
          </div>
        </div>
      </section>

      {/* Background Section */}
      <section>
        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Modelos de Fundo</h3>
        <div className="grid grid-cols-3 gap-2 mb-4">
          {presets.map(p => (
            <button
              key={p.id}
              onClick={() => onSelectPreset(p.url)}
              className="aspect-[9/16] bg-slate-200 rounded overflow-hidden hover:ring-2 hover:ring-brandOrange transition-all"
            >
              <img src={p.url} alt={p.name} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
        <p className="text-[10px] text-slate-400 italic text-center"></p>
      </section>

      {/* Download Button */}
      <div className="mt-auto pt-6">
        <button
          onClick={onDownload}
          className="w-full bg-brandOrange hover:bg-brandOrange/90 text-white font-bold py-4 rounded-xl shadow-lg shadow-brandOrange/30 flex items-center justify-center gap-3 transition-all transform hover:-translate-y-1 active:scale-95"
        >
          <i className="fas fa-download"></i>
          BAIXAR IMAGEM
        </button>
      </div>
    </aside>
  );
};
