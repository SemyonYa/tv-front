export class MenuItem {
    id: number;
    title: string;
    route: string;
    icon?: string;
    children: MenuItem[];

    constructor(id: number, title: string, route: string, icon: string = undefined, children: MenuItem[] = []) {
        this.id = id;
        this.title = title;
        this.route = route;
        this.icon = icon;
        this.children = children;
    }
}