// Code generated by ent, DO NOT EDIT.

package label

import (
	"time"

	"entgo.io/ent/dialect/sql"
	"entgo.io/ent/dialect/sql/sqlgraph"
	"github.com/google/uuid"
)

const (
	// Label holds the string label denoting the label type in the database.
	Label = "label"
	// FieldID holds the string denoting the id field in the database.
	FieldID = "id"
	// FieldCreatedAt holds the string denoting the created_at field in the database.
	FieldCreatedAt = "created_at"
	// FieldUpdatedAt holds the string denoting the updated_at field in the database.
	FieldUpdatedAt = "updated_at"
	// FieldName holds the string denoting the name field in the database.
	FieldName = "name"
	// FieldDescription holds the string denoting the description field in the database.
	FieldDescription = "description"
	// FieldColor holds the string denoting the color field in the database.
	FieldColor = "color"
	// EdgeGroup holds the string denoting the group edge name in mutations.
	EdgeGroup = "group"
	// EdgeItems holds the string denoting the items edge name in mutations.
	EdgeItems = "items"
	// Table holds the table name of the label in the database.
	Table = "labels"
	// GroupTable is the table that holds the group relation/edge.
	GroupTable = "labels"
	// GroupInverseTable is the table name for the Group entity.
	// It exists in this package in order to avoid circular dependency with the "group" package.
	GroupInverseTable = "groups"
	// GroupColumn is the table column denoting the group relation/edge.
	GroupColumn = "group_labels"
	// ItemsTable is the table that holds the items relation/edge. The primary key declared below.
	ItemsTable = "label_items"
	// ItemsInverseTable is the table name for the Item entity.
	// It exists in this package in order to avoid circular dependency with the "item" package.
	ItemsInverseTable = "items"
)

// Columns holds all SQL columns for label fields.
var Columns = []string{
	FieldID,
	FieldCreatedAt,
	FieldUpdatedAt,
	FieldName,
	FieldDescription,
	FieldColor,
}

// ForeignKeys holds the SQL foreign-keys that are owned by the "labels"
// table and are not defined as standalone fields in the schema.
var ForeignKeys = []string{
	"group_labels",
}

var (
	// ItemsPrimaryKey and ItemsColumn2 are the table columns denoting the
	// primary key for the items relation (M2M).
	ItemsPrimaryKey = []string{"label_id", "item_id"}
)

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
	// NameValidator is a validator for the "name" field. It is called by the builders before save.
	NameValidator func(string) error
	// DescriptionValidator is a validator for the "description" field. It is called by the builders before save.
	DescriptionValidator func(string) error
	// ColorValidator is a validator for the "color" field. It is called by the builders before save.
	ColorValidator func(string) error
	// DefaultID holds the default value on creation for the "id" field.
	DefaultID func() uuid.UUID
)

// OrderOption defines the ordering options for the Label queries.
type OrderOption func(*sql.Selector)

// ByID orders the results by the id field.
func ByID(opts ...sql.OrderTermOption) OrderOption {
	return sql.OrderByField(FieldID, opts...).ToFunc()
}

// ByCreatedAt orders the results by the created_at field.
func ByCreatedAt(opts ...sql.OrderTermOption) OrderOption {
	return sql.OrderByField(FieldCreatedAt, opts...).ToFunc()
}

// ByUpdatedAt orders the results by the updated_at field.
func ByUpdatedAt(opts ...sql.OrderTermOption) OrderOption {
	return sql.OrderByField(FieldUpdatedAt, opts...).ToFunc()
}

// ByName orders the results by the name field.
func ByName(opts ...sql.OrderTermOption) OrderOption {
	return sql.OrderByField(FieldName, opts...).ToFunc()
}

// ByDescription orders the results by the description field.
func ByDescription(opts ...sql.OrderTermOption) OrderOption {
	return sql.OrderByField(FieldDescription, opts...).ToFunc()
}

// ByColor orders the results by the color field.
func ByColor(opts ...sql.OrderTermOption) OrderOption {
	return sql.OrderByField(FieldColor, opts...).ToFunc()
}

// ByGroupField orders the results by group field.
func ByGroupField(field string, opts ...sql.OrderTermOption) OrderOption {
	return func(s *sql.Selector) {
		sqlgraph.OrderByNeighborTerms(s, newGroupStep(), sql.OrderByField(field, opts...))
	}
}

// ByItemsCount orders the results by items count.
func ByItemsCount(opts ...sql.OrderTermOption) OrderOption {
	return func(s *sql.Selector) {
		sqlgraph.OrderByNeighborsCount(s, newItemsStep(), opts...)
	}
}

// ByItems orders the results by items terms.
func ByItems(term sql.OrderTerm, terms ...sql.OrderTerm) OrderOption {
	return func(s *sql.Selector) {
		sqlgraph.OrderByNeighborTerms(s, newItemsStep(), append([]sql.OrderTerm{term}, terms...)...)
	}
}
func newGroupStep() *sqlgraph.Step {
	return sqlgraph.NewStep(
		sqlgraph.From(Table, FieldID),
		sqlgraph.To(GroupInverseTable, FieldID),
		sqlgraph.Edge(sqlgraph.M2O, true, GroupTable, GroupColumn),
	)
}
func newItemsStep() *sqlgraph.Step {
	return sqlgraph.NewStep(
		sqlgraph.From(Table, FieldID),
		sqlgraph.To(ItemsInverseTable, FieldID),
		sqlgraph.Edge(sqlgraph.M2M, false, ItemsTable, ItemsPrimaryKey...),
	)
}