import {
  iconHome,
  iconDocument,
  iconBarchart,
  iconTable,
  iconDragAndDrop,
} from "@siemens/ix-icons/icons";
import { addIcons } from "@siemens/ix-icons";

export function initializeIcons(): void {
  addIcons({
    iconHome,
    iconDocument,
    iconBarchart,
    iconTable,
    iconDragAndDrop,
  });
}
