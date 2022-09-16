import React from "react"

const Tree = ({ data, nestedClassName, setSelectedItem, selectedItem, setOpen, isParentSelected }) => {

  return (
    <>
      {data.map((item) => {
        let grandParent = isParentSelected
        return (
          <div key={item.name}>
            <div
              key={item.name}
              to={item.link ? item.link : ""}
              className={`text-gray-light max-w-xs ${selectedItem?.id === item?.id || isParentSelected ? "bg-indigo-400" : ""} hover:bg-gray-600 hover:bg-opacity-75 group flex flex-col font-open-sauce text-base font-bold rounded-md relative cursor-pointer ${nestedClassName ? nestedClassName : "relative pl-3 px-2 py-3"}`}
              onClick={() => { setSelectedItem(item); setOpen(true) }}
            >
              <div className="flex items-center">
                <div className={`flex w-full items-center justify-between  ${nestedClassName ? `px-2 py-1.5` : ""}`}>
                  {item.name}
                </div>
              </div>
            </div>
            <div>
              {
                item.children ?
                  <div className={`flex-1 flex flex-col ${item.noLine ? "pl-10" : "ml-3 pl-3 border-l border-gray-dark"} overflow-y-auto`}>
                    <Tree
                      nestedClassName="absolute py-1"
                      data={item.children}
                      setSelectedItem={setSelectedItem}
                      isParentSelected={selectedItem?.id === item?.id || grandParent ? true : false}
                      selectedItem={selectedItem}
                      setOpen={setOpen}
                    />
                  </div> : null
              }
            </div>
          </div>
        )
      })
      }
    </>
  )
}

export default Tree
