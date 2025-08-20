import * as React from "react"
import * as Select from "@radix-ui/react-select"
import { ChevronDown, Check } from "lucide-react"

const activityOptions = [
  { value: "sedentary", label: "Sedentary (little or no exercise)" },
  { value: "light", label: "Light (exercise 1-3 times/week)" },
  { value: "moderate", label: "Moderate (exercise 3-5 times/week)" },
  { value: "active", label: "Active (exercise 6-7 times/week)" },
  { value: "veryActive", label: "Very Active (hard exercise & physical job)" },
]

const FindEmployers = () => {
  const [value, setValue] = React.useState("sedentary")

  return (
    <div className="w-full max-w-sm mt-96">
      <Select.Root value={value} onValueChange={setValue}>
        <Select.Trigger
          className="inline-flex items-center justify-between w-full px-3 py-2 text-sm border rounded-md shadow-sm h-9 border-input focus:outline-none focus:ring-1 focus:ring-ring"
          aria-label="Activity Level"
        >
          <Select.Value />
          <Select.Icon>
            <ChevronDown className="h-4 w-4 opacity-50" />
          </Select.Icon>
        </Select.Trigger>

        <Select.Portal>
          <Select.Content className="z-50 bg-white border rounded-md shadow-md">
            <Select.Viewport className="p-1">
              {activityOptions.map((option) => (
                <Select.Item
                  key={option.value}
                  value={option.value}
                  className="flex items-center justify-between px-3 py-2 text-sm rounded-md cursor-pointer hover:bg-gray-100 focus:bg-gray-100"
                >
                  <Select.ItemText>{option.label}</Select.ItemText>
                  <Select.ItemIndicator>
                    <Check className="h-4 w-4 text-green-500" />
                  </Select.ItemIndicator>
                </Select.Item>
              ))}
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </div>
  )
}

export default FindEmployers
