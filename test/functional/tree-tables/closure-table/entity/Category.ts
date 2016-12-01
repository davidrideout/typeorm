import {ClosureTable} from "../../../../../src/decorator/tables/ClosureTable";
import {PrimaryGeneratedColumn} from "../../../../../src/decorator/columns/PrimaryGeneratedColumn";
import {Column} from "../../../../../src/decorator/columns/Column";
import {TreeParent} from "../../../../../src/decorator/tree/TreeParent";
import {TreeChildren} from "../../../../../src/decorator/tree/TreeChildren";
import {TreeLevelColumn} from "../../../../../src/decorator/tree/TreeLevelColumn";

@ClosureTable()
export class Category {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
    
    @TreeParent({ cascadeAll: true })
    parentCategory: Category;

    @TreeChildren({ cascadeAll: true })
    childCategories: Category[];

    @TreeLevelColumn()
    level: number;

}