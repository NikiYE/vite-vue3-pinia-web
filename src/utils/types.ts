/**
 * 登录和注册表单的数据结构
 */
export interface registerType {
    name: string;            // 用户名
    password: string;        // 密码
    password2?: string;      // 确认密码
    identity?: string;       // 身份信息
}

/**
 * 登录和注册表单的验证规则
 */
export interface registerRulesType {
    name: ({
        required: boolean;
        message: string;
        trigger: string;
    } | {
        min: number;
        max: number;
        message: string;
        trigger: string;
    })[];
    password: ({
        required: boolean;
        message: string;
        trigger: string;
    } | {
        min: number;
        max: number;
        message: string;
        trigger: string;
    })[];
    password2?: ({
        required: boolean;
        message: string;
        trigger: string;
    } | {
        min: number;
        max: number;
        message: string;
        trigger: string;
    } | {
    validator: (rule: any, value: string, callback: any) => void,
    trigger: string
    })[];
}

/**
 * 用户数据的数据结构
 */
export interface userType {
    avatar: string;          // 用户头像
    exp: number;             // 过期时间
    iat: number;             // 发布时间
    id: string;              // 用户ID
    identity: string;        // 用户身份
    name: string;            // 用户名
}

/**
 * 表单数据的数据结构
 */
export interface formDataType {
    type: string;            // 类型
    describe: string;        // 描述
    remark?: string;         // 备注
    _id?: string;            // 表单ID
}

/**
 * 表单验证规则
 */
export interface formRulesType {
    describe: {
        required: boolean;
        message: string;
        trigger: string;
    }[];
    remark?: {
        required: boolean;
        message: string;
        trigger: string;
    }[];
}
