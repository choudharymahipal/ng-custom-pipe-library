import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DistinctPipe } from "./Pipes/Array/distinct.pipe";
import { FlattenPipe } from "./Pipes/Array/flatten.pipe";
import { SearchPipe } from "./Pipes/Array/search.pipe";
import { ChunkPipe } from "./Pipes/Array/chunk.pipe";
import { GroupByPipe } from "./Pipes/Array/group-by.pipe";
import { ArrayDifferencePipe } from "./Pipes/Array/array-difference.pipe";
import { RandomItemPipe } from "./Pipes/Array/random-item.pipe";
import { MapperPipe } from "./Pipes/Array/mapper.pipe";
import { AggregatorPipe } from "./Pipes/Array/aggregator.pipe";
import { PercentageChangePipe } from "./Pipes/Array/percentage-change.pipe";
import { LowercasePipe } from "./Pipes/String/lowercase.pipe";
import { UppercasePipe } from "./Pipes/String/uppercase.pipe";

@NgModule({
    declarations:[
        DistinctPipe,
        FlattenPipe,
        SearchPipe,
        ChunkPipe,
        GroupByPipe,
        ArrayDifferencePipe,
        RandomItemPipe,
        MapperPipe,
        AggregatorPipe,
        PercentageChangePipe,
        LowercasePipe,
        UppercasePipe
    ],
    imports:[
        CommonModule
    ],
    exports:[
        DistinctPipe,
        FlattenPipe,
        SearchPipe,
        ChunkPipe,
        GroupByPipe,
        ArrayDifferencePipe,
        RandomItemPipe,
        MapperPipe,
        AggregatorPipe,
        PercentageChangePipe,
        LowercasePipe,
        UppercasePipe
    ]
})

export class NgCustomPipeModule{}