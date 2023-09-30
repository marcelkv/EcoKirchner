import { SizeType } from "@/common/services/size-type";
import { Ref } from "vue";

export interface IResponsiveService {
  windowWidth: Ref<number>;
  windowHeight: Ref<number>;
  widthSize: Ref<SizeType>;
  heightSize: Ref<SizeType>;
  destroy(): void;
}
