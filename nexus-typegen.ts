/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import type { Context } from "./api/context"




declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
}

export interface NexusGenEnums {
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
}

export interface NexusGenObjects {
  Lesson: { // root type
    day?: number | null; // Int
    duration?: number | null; // Float
    hourly_rate?: number | null; // Int
    id?: number | null; // Int
    month?: number | null; // Int
    paid?: boolean | null; // Boolean
    student?: string | null; // String
    year?: number | null; // Int
  }
  Mutation: {};
  Query: {};
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars

export interface NexusGenFieldTypes {
  Lesson: { // field return type
    day: number | null; // Int
    duration: number | null; // Float
    hourly_rate: number | null; // Int
    id: number | null; // Int
    month: number | null; // Int
    paid: boolean | null; // Boolean
    student: string | null; // String
    year: number | null; // Int
  }
  Mutation: { // field return type
    addLesson: NexusGenRootTypes['Lesson']; // Lesson!
    togglePaid: NexusGenRootTypes['Lesson'] | null; // Lesson
  }
  Query: { // field return type
    lessons: Array<NexusGenRootTypes['Lesson'] | null> | null; // [Lesson]
    records: Array<NexusGenRootTypes['Lesson'] | null>; // [Lesson]!
  }
}

export interface NexusGenFieldTypeNames {
  Lesson: { // field return type name
    day: 'Int'
    duration: 'Float'
    hourly_rate: 'Int'
    id: 'Int'
    month: 'Int'
    paid: 'Boolean'
    student: 'String'
    year: 'Int'
  }
  Mutation: { // field return type name
    addLesson: 'Lesson'
    togglePaid: 'Lesson'
  }
  Query: { // field return type name
    lessons: 'Lesson'
    records: 'Lesson'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    addLesson: { // args
      day: number; // Int!
      duration: number; // Float!
      hourly_rate: number; // Int!
      month: number; // Int!
      student: string; // String!
      year: number; // Int!
    }
    togglePaid: { // args
      id: number; // Int!
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = never;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}