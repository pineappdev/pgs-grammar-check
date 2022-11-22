import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor';
import { PgsContext } from '../contexts/pgs-context';
import { CreateTypeContext } from '../contexts/create-type-context';
import { CreateNodeTypeContext } from '../contexts/create-node-type-context';
import { CreateEdgeTypeContext } from '../contexts/create-edge-type-context';
import { CreateGraphTypeContext } from '../contexts/create-graph-type-context';
import { GraphTypeContext } from '../contexts/graph-type-context';
import { ElementTypesContext } from '../contexts/element-types-context';
import { ElementTypeContext } from '../contexts/element-type-context';
import { NodeTypeContext } from '../contexts/node-type-context';
import { EdgeTypeContext } from '../contexts/edge-type-context';
import { EndpointTypeContext } from '../contexts/endpoint-type-context';
import { LabelPropertySpecContext } from '../contexts/label-property-spec-context';
import { LabelSpecContext } from '../contexts/label-spec-context';
import { PropertySpecContext } from '../contexts/property-spec-context';
import { PropertiesContext } from '../contexts/properties-context';
import { PropertyContext } from '../contexts/property-context';
import { PropertyTypeContext } from '../contexts/property-type-context';
import { KeyContext } from '../contexts/key-context';
import { LabelNameContext } from '../contexts/label-name-context';
import { TypeNameContext } from '../contexts/type-name-context';
import { DashContext } from '../contexts/dash-context';
import { RightArrowHeadContext } from '../contexts/right-arrow-head-context';

export interface PgsVisitor<Result> extends ParseTreeVisitor<Result> {
  visitPgs?: (ctx: PgsContext) => Result;
  visitCreateType?: (ctx: CreateTypeContext) => Result;
  visitCreateNodeType?: (ctx: CreateNodeTypeContext) => Result;
  visitCreateEdgeType?: (ctx: CreateEdgeTypeContext) => Result;
  visitCreateGraphType?: (ctx: CreateGraphTypeContext) => Result;
  visitGraphType?: (ctx: GraphTypeContext) => Result;
  visitElementTypes?: (ctx: ElementTypesContext) => Result;
  visitElementType?: (ctx: ElementTypeContext) => Result;
  visitNodeType?: (ctx: NodeTypeContext) => Result;
  visitEdgeType?: (ctx: EdgeTypeContext) => Result;
  visitEndpointType?: (ctx: EndpointTypeContext) => Result;
  visitLabelPropertySpec?: (ctx: LabelPropertySpecContext) => Result;
  visitLabelSpec?: (ctx: LabelSpecContext) => Result;
  visitPropertySpec?: (ctx: PropertySpecContext) => Result;
  visitProperties?: (ctx: PropertiesContext) => Result;
  visitProperty?: (ctx: PropertyContext) => Result;
  visitPropertyType?: (ctx: PropertyTypeContext) => Result;
  visitKey?: (ctx: KeyContext) => Result;
  visitLabelName?: (ctx: LabelNameContext) => Result;
  visitTypeName?: (ctx: TypeNameContext) => Result;
  visitDash?: (ctx: DashContext) => Result;
  visitRightArrowHead?: (ctx: RightArrowHeadContext) => Result;
}
