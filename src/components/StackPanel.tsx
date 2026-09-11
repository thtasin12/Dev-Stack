import type { Technology } from "../types"

interface Props {
  stack: Technology[]
  onRemove: (id: number) => void
  onRemoveAll: () => void
}

const StackPanel = ({ stack, onRemove, onRemoveAll }: Props) => {
  return (
    <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm flex flex-col justify-between">
      <div>
        {/* Header Title & Subtitle */}
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-slate-900">Your Stack</h3>
          <p className="text-sm text-slate-400 mt-1">
            {stack.length} Technology Selected
          </p>
        </div>

        {/* Stack Items */}
        {stack.length === 0 ? (
          <p className="text-sm text-gray-400 text-center py-8">
            Your stack is empty. Add some technologies to get started!
          </p>
        ) : (
          <ul className="space-y-3">
            {stack.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between bg-white border border-slate-200 rounded-2xl p-3 shadow-2xs"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="w-8 h-8 object-contain"
                  />
                  <div className="min-w-0">
                    <p className="text-sm font-bold text-slate-900 truncate leading-tight">
                      {item.name}
                    </p>
                    <p className="text-xs text-slate-400 capitalize">
                      {item.category}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => onRemove(item.id)}
                  className="text-slate-400 hover:text-slate-600 text-xl font-light px-2 cursor-pointer"
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Remove All Button at bottom */}
      {stack.length > 0 && (
        <div className="mt-8">
          <button
            onClick={onRemoveAll}
            className="w-full py-3 border border-red-200 rounded-2xl bg-brand-gradient font-bold hover:bg-red-50 transition-colors cursor-pointer"
          >
            Remove All
          </button>
        </div>
      )}
    </div>
  )
}

export default StackPanel