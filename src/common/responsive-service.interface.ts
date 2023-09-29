import { DeviceType } from "@/common/device-type";
import { Ref } from "vue";

export interface IResponsiveService {
  deviceType: Ref<DeviceType>;
  destroy(): void;
}
