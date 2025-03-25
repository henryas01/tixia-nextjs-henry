

export interface ContextType extends ContextTypeData, ContextMethod {}


export interface ContextTypeData {
  city?: number | string;
  date?: string;
  countOfVisitor?: number;
}

export interface ContextMethod {
  setData: (data: ContextTypeData | object, resetAll?: boolean) => void;
}
