
<a name="0x5e3edfbc371897e976dc02a9e211ae5448bc6d66f97e94fffe015d59ad175204_counter"></a>

# Module `0x5e3edfbc371897e976dc02a9e211ae5448bc6d66f97e94fffe015d59ad175204::counter`



-  [Resource `Counter`](#0x5e3edfbc371897e976dc02a9e211ae5448bc6d66f97e94fffe015d59ad175204_counter_Counter)
-  [Function `publish`](#0x5e3edfbc371897e976dc02a9e211ae5448bc6d66f97e94fffe015d59ad175204_counter_publish)
-  [Function `get_value`](#0x5e3edfbc371897e976dc02a9e211ae5448bc6d66f97e94fffe015d59ad175204_counter_get_value)
-  [Function `increase`](#0x5e3edfbc371897e976dc02a9e211ae5448bc6d66f97e94fffe015d59ad175204_counter_increase)


<pre><code></code></pre>



<a name="0x5e3edfbc371897e976dc02a9e211ae5448bc6d66f97e94fffe015d59ad175204_counter_Counter"></a>

## Resource `Counter`



<pre><code><b>struct</b> <a href="counter.md#0x5e3edfbc371897e976dc02a9e211ae5448bc6d66f97e94fffe015d59ad175204_counter_Counter">Counter</a> <b>has</b> <b>copy</b>, key
</code></pre>



<a name="0x5e3edfbc371897e976dc02a9e211ae5448bc6d66f97e94fffe015d59ad175204_counter_publish"></a>

## Function `publish`



<pre><code><b>public</b> entry <b>fun</b> <a href="counter.md#0x5e3edfbc371897e976dc02a9e211ae5448bc6d66f97e94fffe015d59ad175204_counter_publish">publish</a>(account: signer)
</code></pre>



<a name="0x5e3edfbc371897e976dc02a9e211ae5448bc6d66f97e94fffe015d59ad175204_counter_get_value"></a>

## Function `get_value`



<pre><code><b>public</b> <b>fun</b> <a href="counter.md#0x5e3edfbc371897e976dc02a9e211ae5448bc6d66f97e94fffe015d59ad175204_counter_get_value">get_value</a>(addr: <b>address</b>): u64
</code></pre>



<a name="0x5e3edfbc371897e976dc02a9e211ae5448bc6d66f97e94fffe015d59ad175204_counter_increase"></a>

## Function `increase`



<pre><code><b>public</b> entry <b>fun</b> <a href="counter.md#0x5e3edfbc371897e976dc02a9e211ae5448bc6d66f97e94fffe015d59ad175204_counter_increase">increase</a>(addr: <b>address</b>)
</code></pre>
