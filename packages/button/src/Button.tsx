import { defineComponent } from "vue";
import props from "./props";
import './button.scss'
const Button = defineComponent({
  name: "mt-button",
  props,
  setup(prop, { slots }) {
    const renderSolt = () => {
      return slots.default && slots?.default();
    };
    const renderIconSolt=()=>{
        
    }
    return () => {
      return (
        <button>
          <span>{renderSolt()}</span>
        </button>
      );
    };
  },
});
export default Button;
