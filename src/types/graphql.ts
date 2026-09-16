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

export type AddCvProjectInput = {
  cvId: Scalars['ID']['input'];
  projectId: Scalars['ID']['input'];
};

export type AddCvSkillInput = {
  categoryId: Scalars['String']['input'];
  cvId: Scalars['ID']['input'];
  mastery?: InputMaybe<Mastery>;
  name: Scalars['String']['input'];
};

export type AddProfileLanguageInput = {
  name: Scalars['String']['input'];
  proficiency: Proficiency;
  userId: Scalars['ID']['input'];
};

export type AddProfileSkillInput = {
  categoryId: Scalars['String']['input'];
  mastery: Mastery;
  name: Scalars['String']['input'];
  userId: Scalars['ID']['input'];
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

export type CreateCvInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  education?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  userId: Scalars['ID']['input'];
};

export type CreateLanguageInput = {
  iso2: Scalars['String']['input'];
  name: Scalars['String']['input'];
  native_name: Scalars['String']['input'];
};

export type CreateSkillInput = {
  categoryId: Scalars['ID']['input'];
  name: Scalars['String']['input'];
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

export type DeleteCvInput = {
  cvId: Scalars['ID']['input'];
};

export type DeleteCvSkillInput = {
  cvId: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};

export type DeleteLanguageInput = {
  id: Scalars['ID']['input'];
};

export type DeleteProfileLanguageInput = {
  name: Scalars['String']['input'];
  userId: Scalars['ID']['input'];
};

export type DeleteProfileSkillInput = {
  name: Scalars['String']['input'];
  userId: Scalars['ID']['input'];
};

export type DeleteResult = {
  __typename?: 'DeleteResult';
  affected: Scalars['Int']['output'];
};

export type DeleteSkillInput = {
  skillId: Scalars['ID']['input'];
};

export type Department = {
  __typename?: 'Department';
  created_at?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type ForgotPasswordInput = {
  email: Scalars['String']['input'];
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

export type Mutation = {
  __typename?: 'Mutation';
  addCvProject: Cv;
  addCvSkill: Cv;
  addProfileLanguage: UserProfile;
  addProfileSkill: UserProfile;
  createCv: Cv;
  createLanguage: Language;
  createSkill: Skill;
  deleteCv: DeleteResult;
  deleteCvSkill: Cv;
  deleteLanguage: Language;
  deleteProfileLanguage: UserProfile;
  deleteProfileSkill: UserProfile;
  deleteSkill: DeleteResult;
  forgotPassword: Scalars['Boolean']['output'];
  removeCvProject: Cv;
  signup: AuthResult;
  updateCvProject: Cv;
  updateCvSkill: Cv;
  updateLanguage: Language;
  updateProfile: UserProfile;
  updateProfileLanguage: UserProfile;
  updateProfileSkill: UserProfile;
  updateSkill: Skill;
  updateUser: User;
  uploadAvatar: Scalars['String']['output'];
};


export type MutationAddCvProjectArgs = {
  project: AddCvProjectInput;
};


export type MutationAddCvSkillArgs = {
  skill: AddCvSkillInput;
};


export type MutationAddProfileLanguageArgs = {
  language: AddProfileLanguageInput;
};


export type MutationAddProfileSkillArgs = {
  skill: AddProfileSkillInput;
};


export type MutationCreateCvArgs = {
  cv: CreateCvInput;
};


export type MutationCreateLanguageArgs = {
  language: CreateLanguageInput;
};


export type MutationCreateSkillArgs = {
  skill: CreateSkillInput;
};


export type MutationDeleteCvArgs = {
  cv: DeleteCvInput;
};


export type MutationDeleteCvSkillArgs = {
  skill: DeleteCvSkillInput;
};


export type MutationDeleteLanguageArgs = {
  language: DeleteLanguageInput;
};


export type MutationDeleteProfileLanguageArgs = {
  language: DeleteProfileLanguageInput;
};


export type MutationDeleteProfileSkillArgs = {
  skill: DeleteProfileSkillInput;
};


export type MutationDeleteSkillArgs = {
  skill: DeleteSkillInput;
};


export type MutationForgotPasswordArgs = {
  auth: ForgotPasswordInput;
};


export type MutationRemoveCvProjectArgs = {
  project: RemoveCvProjectInput;
};


export type MutationSignupArgs = {
  auth: AuthInput;
};


export type MutationUpdateCvProjectArgs = {
  project: UpdateCvProjectInput;
};


export type MutationUpdateCvSkillArgs = {
  skill: UpdateCvSkillInput;
};


export type MutationUpdateLanguageArgs = {
  language: UpdateLanguageInput;
};


export type MutationUpdateProfileArgs = {
  profile: UpdateProfileInput;
};


export type MutationUpdateProfileLanguageArgs = {
  language: AddProfileLanguageInput;
};


export type MutationUpdateProfileSkillArgs = {
  skill: AddProfileSkillInput;
};


export type MutationUpdateSkillArgs = {
  skill: UpdateSkillInput;
};


export type MutationUpdateUserArgs = {
  user: UpdateUserInput;
};


export type MutationUploadAvatarArgs = {
  avatar: UploadAvatarInput;
};

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

export type RemoveCvProjectInput = {
  cvId: Scalars['ID']['input'];
  projectId: Scalars['ID']['input'];
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

export type UpdateCvProjectInput = {
  cvId: Scalars['ID']['input'];
  end_date?: InputMaybe<Scalars['String']['input']>;
  projectId: Scalars['ID']['input'];
  start_date?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateCvSkillInput = {
  cvId: Scalars['ID']['input'];
  mastery: Mastery;
  name: Scalars['String']['input'];
};

export type UpdateLanguageInput = {
  id: Scalars['ID']['input'];
  iso2?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  native_name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateProfileInput = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  userId: Scalars['ID']['input'];
};

export type UpdateSkillInput = {
  categoryId?: InputMaybe<Scalars['ID']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUserInput = {
  department_id?: InputMaybe<Scalars['ID']['input']>;
  department_name?: InputMaybe<Scalars['String']['input']>;
  position_id?: InputMaybe<Scalars['ID']['input']>;
  position_name?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Role>;
  userId: Scalars['ID']['input'];
};

export type UploadAvatarInput = {
  base64: Scalars['String']['input'];
  userId: Scalars['ID']['input'];
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
  AddCvProjectInput: AddCvProjectInput;
  AddCvSkillInput: AddCvSkillInput;
  AddProfileLanguageInput: AddProfileLanguageInput;
  AddProfileSkillInput: AddProfileSkillInput;
  AuthInput: AuthInput;
  AuthResult: ResolverTypeWrapper<AuthResult>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  CreateCvInput: CreateCvInput;
  CreateLanguageInput: CreateLanguageInput;
  CreateSkillInput: CreateSkillInput;
  Cv: ResolverTypeWrapper<Cv>;
  CvLanguage: ResolverTypeWrapper<CvLanguage>;
  CvProject: ResolverTypeWrapper<CvProject>;
  CvSkill: ResolverTypeWrapper<CvSkill>;
  DeleteCvInput: DeleteCvInput;
  DeleteCvSkillInput: DeleteCvSkillInput;
  DeleteLanguageInput: DeleteLanguageInput;
  DeleteProfileLanguageInput: DeleteProfileLanguageInput;
  DeleteProfileSkillInput: DeleteProfileSkillInput;
  DeleteResult: ResolverTypeWrapper<DeleteResult>;
  DeleteSkillInput: DeleteSkillInput;
  Department: ResolverTypeWrapper<Department>;
  ForgotPasswordInput: ForgotPasswordInput;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Language: ResolverTypeWrapper<Language>;
  Mastery: Mastery;
  Mutation: ResolverTypeWrapper<Record<PropertyKey, never>>;
  Position: ResolverTypeWrapper<Position>;
  Proficiency: Proficiency;
  ProfileLanguage: ResolverTypeWrapper<ProfileLanguage>;
  ProfileSkill: ResolverTypeWrapper<ProfileSkill>;
  Project: ResolverTypeWrapper<Project>;
  Query: ResolverTypeWrapper<Record<PropertyKey, never>>;
  RemoveCvProjectInput: RemoveCvProjectInput;
  Role: Role;
  Skill: ResolverTypeWrapper<Skill>;
  SkillCategory: ResolverTypeWrapper<SkillCategory>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  UpdateCvProjectInput: UpdateCvProjectInput;
  UpdateCvSkillInput: UpdateCvSkillInput;
  UpdateLanguageInput: UpdateLanguageInput;
  UpdateProfileInput: UpdateProfileInput;
  UpdateSkillInput: UpdateSkillInput;
  UpdateUserInput: UpdateUserInput;
  UploadAvatarInput: UploadAvatarInput;
  User: ResolverTypeWrapper<User>;
  UserProfile: ResolverTypeWrapper<UserProfile>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AddCvProjectInput: AddCvProjectInput;
  AddCvSkillInput: AddCvSkillInput;
  AddProfileLanguageInput: AddProfileLanguageInput;
  AddProfileSkillInput: AddProfileSkillInput;
  AuthInput: AuthInput;
  AuthResult: AuthResult;
  Boolean: Scalars['Boolean']['output'];
  CreateCvInput: CreateCvInput;
  CreateLanguageInput: CreateLanguageInput;
  CreateSkillInput: CreateSkillInput;
  Cv: Cv;
  CvLanguage: CvLanguage;
  CvProject: CvProject;
  CvSkill: CvSkill;
  DeleteCvInput: DeleteCvInput;
  DeleteCvSkillInput: DeleteCvSkillInput;
  DeleteLanguageInput: DeleteLanguageInput;
  DeleteProfileLanguageInput: DeleteProfileLanguageInput;
  DeleteProfileSkillInput: DeleteProfileSkillInput;
  DeleteResult: DeleteResult;
  DeleteSkillInput: DeleteSkillInput;
  Department: Department;
  ForgotPasswordInput: ForgotPasswordInput;
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  Language: Language;
  Mutation: Record<PropertyKey, never>;
  Position: Position;
  ProfileLanguage: ProfileLanguage;
  ProfileSkill: ProfileSkill;
  Project: Project;
  Query: Record<PropertyKey, never>;
  RemoveCvProjectInput: RemoveCvProjectInput;
  Skill: Skill;
  SkillCategory: SkillCategory;
  String: Scalars['String']['output'];
  UpdateCvProjectInput: UpdateCvProjectInput;
  UpdateCvSkillInput: UpdateCvSkillInput;
  UpdateLanguageInput: UpdateLanguageInput;
  UpdateProfileInput: UpdateProfileInput;
  UpdateSkillInput: UpdateSkillInput;
  UpdateUserInput: UpdateUserInput;
  UploadAvatarInput: UploadAvatarInput;
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

export type DeleteResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteResult'] = ResolversParentTypes['DeleteResult']> = {
  affected?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
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

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  addCvProject?: Resolver<ResolversTypes['Cv'], ParentType, ContextType, RequireFields<MutationAddCvProjectArgs, 'project'>>;
  addCvSkill?: Resolver<ResolversTypes['Cv'], ParentType, ContextType, RequireFields<MutationAddCvSkillArgs, 'skill'>>;
  addProfileLanguage?: Resolver<ResolversTypes['UserProfile'], ParentType, ContextType, RequireFields<MutationAddProfileLanguageArgs, 'language'>>;
  addProfileSkill?: Resolver<ResolversTypes['UserProfile'], ParentType, ContextType, RequireFields<MutationAddProfileSkillArgs, 'skill'>>;
  createCv?: Resolver<ResolversTypes['Cv'], ParentType, ContextType, RequireFields<MutationCreateCvArgs, 'cv'>>;
  createLanguage?: Resolver<ResolversTypes['Language'], ParentType, ContextType, RequireFields<MutationCreateLanguageArgs, 'language'>>;
  createSkill?: Resolver<ResolversTypes['Skill'], ParentType, ContextType, RequireFields<MutationCreateSkillArgs, 'skill'>>;
  deleteCv?: Resolver<ResolversTypes['DeleteResult'], ParentType, ContextType, RequireFields<MutationDeleteCvArgs, 'cv'>>;
  deleteCvSkill?: Resolver<ResolversTypes['Cv'], ParentType, ContextType, RequireFields<MutationDeleteCvSkillArgs, 'skill'>>;
  deleteLanguage?: Resolver<ResolversTypes['Language'], ParentType, ContextType, RequireFields<MutationDeleteLanguageArgs, 'language'>>;
  deleteProfileLanguage?: Resolver<ResolversTypes['UserProfile'], ParentType, ContextType, RequireFields<MutationDeleteProfileLanguageArgs, 'language'>>;
  deleteProfileSkill?: Resolver<ResolversTypes['UserProfile'], ParentType, ContextType, RequireFields<MutationDeleteProfileSkillArgs, 'skill'>>;
  deleteSkill?: Resolver<ResolversTypes['DeleteResult'], ParentType, ContextType, RequireFields<MutationDeleteSkillArgs, 'skill'>>;
  forgotPassword?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationForgotPasswordArgs, 'auth'>>;
  removeCvProject?: Resolver<ResolversTypes['Cv'], ParentType, ContextType, RequireFields<MutationRemoveCvProjectArgs, 'project'>>;
  signup?: Resolver<ResolversTypes['AuthResult'], ParentType, ContextType, RequireFields<MutationSignupArgs, 'auth'>>;
  updateCvProject?: Resolver<ResolversTypes['Cv'], ParentType, ContextType, RequireFields<MutationUpdateCvProjectArgs, 'project'>>;
  updateCvSkill?: Resolver<ResolversTypes['Cv'], ParentType, ContextType, RequireFields<MutationUpdateCvSkillArgs, 'skill'>>;
  updateLanguage?: Resolver<ResolversTypes['Language'], ParentType, ContextType, RequireFields<MutationUpdateLanguageArgs, 'language'>>;
  updateProfile?: Resolver<ResolversTypes['UserProfile'], ParentType, ContextType, RequireFields<MutationUpdateProfileArgs, 'profile'>>;
  updateProfileLanguage?: Resolver<ResolversTypes['UserProfile'], ParentType, ContextType, RequireFields<MutationUpdateProfileLanguageArgs, 'language'>>;
  updateProfileSkill?: Resolver<ResolversTypes['UserProfile'], ParentType, ContextType, RequireFields<MutationUpdateProfileSkillArgs, 'skill'>>;
  updateSkill?: Resolver<ResolversTypes['Skill'], ParentType, ContextType, RequireFields<MutationUpdateSkillArgs, 'skill'>>;
  updateUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationUpdateUserArgs, 'user'>>;
  uploadAvatar?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<MutationUploadAvatarArgs, 'avatar'>>;
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
  DeleteResult?: DeleteResultResolvers<ContextType>;
  Department?: DepartmentResolvers<ContextType>;
  Language?: LanguageResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
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

