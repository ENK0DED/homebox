// Code generated by ent, DO NOT EDIT.

package groupinvitationtoken

import (
	"time"

	"github.com/google/uuid"
)

const (
	// Label holds the string label denoting the groupinvitationtoken type in the database.
	Label = "group_invitation_token"
	// FieldID holds the string denoting the id field in the database.
	FieldID = "id"
	// FieldCreatedAt holds the string denoting the created_at field in the database.
	FieldCreatedAt = "created_at"
	// FieldUpdatedAt holds the string denoting the updated_at field in the database.
	FieldUpdatedAt = "updated_at"
	// FieldToken holds the string denoting the token field in the database.
	FieldToken = "token"
	// FieldExpiresAt holds the string denoting the expires_at field in the database.
	FieldExpiresAt = "expires_at"
	// FieldUses holds the string denoting the uses field in the database.
	FieldUses = "uses"
	// EdgeGroup holds the string denoting the group edge name in mutations.
	EdgeGroup = "group"
	// Table holds the table name of the groupinvitationtoken in the database.
	Table = "group_invitation_tokens"
	// GroupTable is the table that holds the group relation/edge.
	GroupTable = "group_invitation_tokens"
	// GroupInverseTable is the table name for the Group entity.
	// It exists in this package in order to avoid circular dependency with the "group" package.
	GroupInverseTable = "groups"
	// GroupColumn is the table column denoting the group relation/edge.
	GroupColumn = "group_invitation_tokens"
)

// Columns holds all SQL columns for groupinvitationtoken fields.
var Columns = []string{
	FieldID,
	FieldCreatedAt,
	FieldUpdatedAt,
	FieldToken,
	FieldExpiresAt,
	FieldUses,
}

// ForeignKeys holds the SQL foreign-keys that are owned by the "group_invitation_tokens"
// table and are not defined as standalone fields in the schema.
var ForeignKeys = []string{
	"group_invitation_tokens",
}

// ValidColumn reports if the column name is valid (part of the table columns).
func ValidColumn(column string) bool {
	for i := range Columns {
		if column == Columns[i] {
			return true
		}
	}
	for i := range ForeignKeys {
		if column == ForeignKeys[i] {
			return true
		}
	}
	return false
}

var (
	// DefaultCreatedAt holds the default value on creation for the "created_at" field.
	DefaultCreatedAt func() time.Time
	// DefaultUpdatedAt holds the default value on creation for the "updated_at" field.
	DefaultUpdatedAt func() time.Time
	// UpdateDefaultUpdatedAt holds the default value on update for the "updated_at" field.
	UpdateDefaultUpdatedAt func() time.Time
	// DefaultExpiresAt holds the default value on creation for the "expires_at" field.
	DefaultExpiresAt func() time.Time
	// DefaultUses holds the default value on creation for the "uses" field.
	DefaultUses int
	// DefaultID holds the default value on creation for the "id" field.
	DefaultID func() uuid.UUID
)