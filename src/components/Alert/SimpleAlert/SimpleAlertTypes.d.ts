export type SimpleAlertPresenterPropsType = {
  isOpen:boolean;
  title:string;
  content:string;
  focusRef:React.ElementRef;
  footerButtons: Array<Button>
}


export type SimpleAlertContainerPropsType = {
  isOpen:boolean;
  handleClose: () => void;
  title:string;
  content: string; 
  buttons?: Array<Button>
}