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
                        <h3>hi</h3>
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