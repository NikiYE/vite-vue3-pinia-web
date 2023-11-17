// useLoading.ts
import { getCurrentInstance } from 'vue';

export function useLoading() {
  const instance = getCurrentInstance();
  const loading = instance?.appContext.config.globalProperties._loading;
  return loading;
}
