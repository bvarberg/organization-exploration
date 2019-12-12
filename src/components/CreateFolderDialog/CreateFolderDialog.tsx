import React from "react"

export function CreateFolderDialog() {
  return <div data-testid="create-folder-dialog" />
}

// import { useDispatch } from "react-redux"

// import { Button } from "../../lib/crema-ds/components/Button"
// // import { Dialog, Button } from "@crema-ds/components"

// // import createFolder from "./thunks/createFolder"

// function createFolder(options: any) {
//   return {
//     type: "CREATE_FOLDER",
//     ...options,
//   }
// }

// type ClientID = string

// interface Client {
//   id: ClientID
//   displayName: string
// }

// interface Props {
//   isOpen: boolean
//   onDismiss: () => void
//   owner: Client["id"]
// }
// export default function CreateFolderDialog(props: Props) {
//   const { owner, isOpen } = props

//   const dispatch = useDispatch()

//   function handleCancel() {
//     onDismiss()
//   }

//   function handleCreateFolder(folderName: string) {
//     dispatch(createFolder({ owner, folderName }))
//   }

//   return (
//     <Dialog isOpen={isOpen} title="Create Folder" onDismiss={handleCancel}>
//       <Button onClick={handleCancel}>Cancel</Button>
//       <Button onClick={() => handleCreateFolder("Folder F")}>Create</Button>
//     </Dialog>
//   )
// }
