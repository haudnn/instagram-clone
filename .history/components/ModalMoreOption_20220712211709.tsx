import React from 'react'

const ModalMoreOption = () => {
  return (
    <div className="min-h-screen">
      <div className="fixed inset-0 bg-modal z-50">
        <div className="flex items-center justify-center w-full h-full grow shrink-0">
            <div className="min-h-0 min-w-0 flex justify-center box-border items-start">
              <div className="flex justify-center flex-col items-center relative overflow-y-hidden box-content outline-none">
                  <div className="w-[400px] flex shrink justify-center m-5 relative container-modal-base">
                    <div style={{ maxHeight: "calc(100vh - 40px)" }} className="w-full bg-white overflow-y-auto overflow-x-auto rounded-r-xl rounded-l-xl ">
                        <div className="flex flex-col h-full max-w-full">
                          <div className="flex items-stretch border-0 box-border flex-col shrink-0 w-full h-full justify-center m-0 p-0 relative align-baseline"></div>
                        </div>
                    </div>
                  </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ModalMoreOption