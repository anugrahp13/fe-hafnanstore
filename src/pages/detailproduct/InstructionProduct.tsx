import { useState } from "react";
import { NexasitesProps } from "../../types/Nexasite.type";

interface DetailProductProps {
  nexasites: NexasitesProps;
}
export const InstructionProduct = ({ nexasites }: DetailProductProps) => {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(null), 2000);
  };
  return (
    <>
      <div className="grid gap-2 mt-4">
        {nexasites.instructions.map((instructionGroup, groupIndex) => (
          <div key={groupIndex} className="space-y-3">
            <h3 className="text-base font-bold">{instructionGroup.title}</h3>

            {/* Terminal-like container */}
            <div className="bg-gray-900 text-gray-100 p-4 rounded-md font-mono text-sm">
              <div className="flex items-center mb-2">
                <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                <span className="text-gray-400 ml-2">Terminal</span>
              </div>

              {/* Perintah tunggal (karena commands adalah string) */}
              <div className="flex items-start">
                <span className="text-green-400 mr-2">{">"}</span>
                <div className="flex-1 flex items-center justify-between">
                  <code>{instructionGroup.commands}</code>
                  <button
                    onClick={() => copyToClipboard(instructionGroup.commands)}
                    className="ml-4 px-2 py-1 bg-gray-700 text-xs rounded hover:bg-gray-600 transition-colors"
                  >
                    {copied === instructionGroup.commands ? "Copied!" : "Copy"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="text-base">
          Setelah menjalankan perintah di atas, aplikasi akan berjalan di{" "}
          <span className="font-mono">http://localhost:5173</span>
        </div>
      </div>
    </>
  );
};
