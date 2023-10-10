import AppLayout from "./ui/AppLayout";
import {Toaster} from 'react-hot-toast'
function App() {
  
  return <div className="">
    <AppLayout />
    <Toaster 
      position='top-center'
      gutter={12}
      containerStyle={{ margin: '8px'}}
      toastOptions= {{
        error: {
          duration: 3000
        },
        style: {
          fontSize: "16px",
          maxWidth: '500px',
          padding: '16px 24px',
          backgroundColor: 'bg-slate-100'
        }
      }} />
  </div>
}

export default App;
