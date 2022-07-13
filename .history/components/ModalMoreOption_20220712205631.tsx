import React from 'react'

const ModalMoreOption = () => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <div className="fixed inset-0 bg-modal z-50">
        <div className="flex items-center justify-center w-full h-full grow shrink-0">
            <div className="min-h-0 min-w-0 flex justify-center box-border items-start">
              <div className="flex justify-center flex-col items-center relative overflow-y-hidden box-content outline-none">
                  <div className="flex shrink justify-center m-5 relative container-modal-create-post">

                  </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ModalMoreOption