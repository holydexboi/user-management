import { Admin } from './admin.entity'

export const adminProvider = [
    {
        provide: 'ADMIN_REPOSITORY',
        useValue: Admin
    }
]