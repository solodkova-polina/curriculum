import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type AuthInput = {
  email: Scalars['String']['input'];
  password_hash: Scalars['String']['input'];
};

export type AuthResult = {
  __typename?: 'AuthResult';
  access_token: Scalars['String']['output'];
  refresh_token: Scalars['String']['output'];
  user: User;
};

export type Cv = {
  __typename?: 'Cv';
  description?: Maybe<Scalars['String']['output']>;
  education?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  languages: Array<CvLanguage>;
  name: Scalars['String']['output'];
  projects: Array<CvProject>;
  skills: Array<CvSkill>;
  user: User;
};

export type CvLanguage = {
  __typename?: 'CvLanguage';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  proficiency: Proficiency;
};

export type CvProject = {
  __typename?: 'CvProject';
  description: Scalars['String']['output'];
  domain: Scalars['String']['output'];
  end_date?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  internal_name: Scalars['String']['output'];
  name: Scalars['String']['output'];
  project?: Maybe<Project>;
  start_date: Scalars['String']['output'];
};

export type CvSkill = {
  __typename?: 'CvSkill';
  categoryId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  mastery?: Maybe<Mastery>;
  name: Scalars['String']['output'];
};

export type Department = {
  __typename?: 'Department';
  created_at?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type Language = {
  __typename?: 'Language';
  id: Scalars['ID']['output'];
  iso2: Scalars['String']['output'];
  name: Scalars['String']['output'];
  native_name: Scalars['String']['output'];
};

export enum Mastery {
  Advanced = 'Advanced',
  Competent = 'Competent',
  Expert = 'Expert',
  Master = 'Master',
  Novice = 'Novice'
}

export type Position = {
  __typename?: 'Position';
  created_at?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export enum Proficiency {
  A1 = 'A1',
  A2 = 'A2',
  B1 = 'B1',
  B2 = 'B2',
  C1 = 'C1',
  C2 = 'C2',
  Native = 'Native'
}

export type ProfileLanguage = {
  __typename?: 'ProfileLanguage';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  proficiency: Proficiency;
};

export type ProfileSkill = {
  __typename?: 'ProfileSkill';
  categoryId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  mastery: Mastery;
  name: Scalars['String']['output'];
};

export type Project = {
  __typename?: 'Project';
  description: Scalars['String']['output'];
  domain: Scalars['String']['output'];
  end_date?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  internal_name: Scalars['String']['output'];
  name: Scalars['String']['output'];
  start_date: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  cv?: Maybe<Cv>;
  cvs: Array<Cv>;
  departments: Array<Department>;
  languages: Array<Language>;
  login: AuthResult;
  positions: Array<Position>;
  profile?: Maybe<UserProfile>;
  projects: Array<Project>;
  skillCategories: Array<SkillCategory>;
  skills: Array<Skill>;
  user?: Maybe<User>;
  users: Array<User>;
};


export type QueryCvArgs = {
  cvId: Scalars['ID']['input'];
};


export type QueryLoginArgs = {
  auth: AuthInput;
};


export type QueryProfileArgs = {
  userId: Scalars['ID']['input'];
};


export type QueryUserArgs = {
  userId: Scalars['ID']['input'];
};

export enum Role {
  Admin = 'Admin',
  Employee = 'Employee',
  Manager = 'Manager'
}

export type Skill = {
  __typename?: 'Skill';
  category: SkillCategory;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type SkillCategory = {
  __typename?: 'SkillCategory';
  children: Array<SkillCategory>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  order: Scalars['Int']['output'];
  parent?: Maybe<SkillCategory>;
};

export type User = {
  __typename?: 'User';
  created_at?: Maybe<Scalars['String']['output']>;
  cvs: Array<Cv>;
  department?: Maybe<Department>;
  department_name?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  position?: Maybe<Position>;
  position_name?: Maybe<Scalars['String']['output']>;
  profile?: Maybe<UserProfile>;
  role: Role;
};

export type UserProfile = {
  __typename?: 'UserProfile';
  avatar?: Maybe<Scalars['String']['output']>;
  first_name: Scalars['String']['output'];
  full_name: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  languages: Array<ProfileLanguage>;
  last_name: Scalars['String']['output'];
  skills: Array<ProfileSkill>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>, TArgs = Record<PropertyKey, never>> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>, TArgs = Record<PropertyKey, never>> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = Record<PropertyKey, never>, TParent = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>, TArgs = Record<PropertyKey, never>> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;





/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AuthInput: AuthInput;
  AuthResult: ResolverTypeWrapper<AuthResult>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Cv: ResolverTypeWrapper<Cv>;
  CvLanguage: ResolverTypeWrapper<CvLanguage>;
  CvProject: ResolverTypeWrapper<CvProject>;
  CvSkill: ResolverTypeWrapper<CvSkill>;
  Department: ResolverTypeWrapper<Department>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Language: ResolverTypeWrapper<Language>;
  Mastery: Mastery;
  Position: ResolverTypeWrapper<Position>;
  Proficiency: Proficiency;
  ProfileLanguage: ResolverTypeWrapper<ProfileLanguage>;
  ProfileSkill: ResolverTypeWrapper<ProfileSkill>;
  Project: ResolverTypeWrapper<Project>;
  Query: ResolverTypeWrapper<Record<PropertyKey, never>>;
  Role: Role;
  Skill: ResolverTypeWrapper<Skill>;
  SkillCategory: ResolverTypeWrapper<SkillCategory>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  User: ResolverTypeWrapper<User>;
  UserProfile: ResolverTypeWrapper<UserProfile>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AuthInput: AuthInput;
  AuthResult: AuthResult;
  Boolean: Scalars['Boolean']['output'];
  Cv: Cv;
  CvLanguage: CvLanguage;
  CvProject: CvProject;
  CvSkill: CvSkill;
  Department: Department;
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  Language: Language;
  Position: Position;
  ProfileLanguage: ProfileLanguage;
  ProfileSkill: ProfileSkill;
  Project: Project;
  Query: Record<PropertyKey, never>;
  Skill: Skill;
  SkillCategory: SkillCategory;
  String: Scalars['String']['output'];
  User: User;
  UserProfile: UserProfile;
};

export type AuthResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['AuthResult'] = ResolversParentTypes['AuthResult']> = {
  access_token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  refresh_token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
};

export type CvResolvers<ContextType = any, ParentType extends ResolversParentTypes['Cv'] = ResolversParentTypes['Cv']> = {
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  education?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  languages?: Resolver<Array<ResolversTypes['CvLanguage']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  projects?: Resolver<Array<ResolversTypes['CvProject']>, ParentType, ContextType>;
  skills?: Resolver<Array<ResolversTypes['CvSkill']>, ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
};

export type CvLanguageResolvers<ContextType = any, ParentType extends ResolversParentTypes['CvLanguage'] = ResolversParentTypes['CvLanguage']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  proficiency?: Resolver<ResolversTypes['Proficiency'], ParentType, ContextType>;
};

export type CvProjectResolvers<ContextType = any, ParentType extends ResolversParentTypes['CvProject'] = ResolversParentTypes['CvProject']> = {
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  domain?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  end_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  internal_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  project?: Resolver<Maybe<ResolversTypes['Project']>, ParentType, ContextType>;
  start_date?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type CvSkillResolvers<ContextType = any, ParentType extends ResolversParentTypes['CvSkill'] = ResolversParentTypes['CvSkill']> = {
  categoryId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  mastery?: Resolver<Maybe<ResolversTypes['Mastery']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type DepartmentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Department'] = ResolversParentTypes['Department']> = {
  created_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type LanguageResolvers<ContextType = any, ParentType extends ResolversParentTypes['Language'] = ResolversParentTypes['Language']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  iso2?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  native_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type PositionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Position'] = ResolversParentTypes['Position']> = {
  created_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type ProfileLanguageResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProfileLanguage'] = ResolversParentTypes['ProfileLanguage']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  proficiency?: Resolver<ResolversTypes['Proficiency'], ParentType, ContextType>;
};

export type ProfileSkillResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProfileSkill'] = ResolversParentTypes['ProfileSkill']> = {
  categoryId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  mastery?: Resolver<ResolversTypes['Mastery'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type ProjectResolvers<ContextType = any, ParentType extends ResolversParentTypes['Project'] = ResolversParentTypes['Project']> = {
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  domain?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  end_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  internal_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  start_date?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  cv?: Resolver<Maybe<ResolversTypes['Cv']>, ParentType, ContextType, RequireFields<QueryCvArgs, 'cvId'>>;
  cvs?: Resolver<Array<ResolversTypes['Cv']>, ParentType, ContextType>;
  departments?: Resolver<Array<ResolversTypes['Department']>, ParentType, ContextType>;
  languages?: Resolver<Array<ResolversTypes['Language']>, ParentType, ContextType>;
  login?: Resolver<ResolversTypes['AuthResult'], ParentType, ContextType, RequireFields<QueryLoginArgs, 'auth'>>;
  positions?: Resolver<Array<ResolversTypes['Position']>, ParentType, ContextType>;
  profile?: Resolver<Maybe<ResolversTypes['UserProfile']>, ParentType, ContextType, RequireFields<QueryProfileArgs, 'userId'>>;
  projects?: Resolver<Array<ResolversTypes['Project']>, ParentType, ContextType>;
  skillCategories?: Resolver<Array<ResolversTypes['SkillCategory']>, ParentType, ContextType>;
  skills?: Resolver<Array<ResolversTypes['Skill']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserArgs, 'userId'>>;
  users?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>;
};

export type SkillResolvers<ContextType = any, ParentType extends ResolversParentTypes['Skill'] = ResolversParentTypes['Skill']> = {
  category?: Resolver<ResolversTypes['SkillCategory'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type SkillCategoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['SkillCategory'] = ResolversParentTypes['SkillCategory']> = {
  children?: Resolver<Array<ResolversTypes['SkillCategory']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  order?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes['SkillCategory']>, ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  created_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cvs?: Resolver<Array<ResolversTypes['Cv']>, ParentType, ContextType>;
  department?: Resolver<Maybe<ResolversTypes['Department']>, ParentType, ContextType>;
  department_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['Position']>, ParentType, ContextType>;
  position_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  profile?: Resolver<Maybe<ResolversTypes['UserProfile']>, ParentType, ContextType>;
  role?: Resolver<ResolversTypes['Role'], ParentType, ContextType>;
};

export type UserProfileResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserProfile'] = ResolversParentTypes['UserProfile']> = {
  avatar?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  first_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  full_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  languages?: Resolver<Array<ResolversTypes['ProfileLanguage']>, ParentType, ContextType>;
  last_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  skills?: Resolver<Array<ResolversTypes['ProfileSkill']>, ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  AuthResult?: AuthResultResolvers<ContextType>;
  Cv?: CvResolvers<ContextType>;
  CvLanguage?: CvLanguageResolvers<ContextType>;
  CvProject?: CvProjectResolvers<ContextType>;
  CvSkill?: CvSkillResolvers<ContextType>;
  Department?: DepartmentResolvers<ContextType>;
  Language?: LanguageResolvers<ContextType>;
  Position?: PositionResolvers<ContextType>;
  ProfileLanguage?: ProfileLanguageResolvers<ContextType>;
  ProfileSkill?: ProfileSkillResolvers<ContextType>;
  Project?: ProjectResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Skill?: SkillResolvers<ContextType>;
  SkillCategory?: SkillCategoryResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UserProfile?: UserProfileResolvers<ContextType>;
};

